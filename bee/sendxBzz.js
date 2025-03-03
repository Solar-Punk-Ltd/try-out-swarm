const { ethers, JsonRpcProvider } = require('ethers');
const fs = require('fs');
const path = require('path');

const provider = new JsonRpcProvider('https://xdai.fairdatasociety.org');

// WARNING: do not push this up to anywhere
const privateKey = '';

const wallet = new ethers.Wallet(privateKey, provider);

// 0.1 = 10
const amountIn10xBzz = '0.05';

const xBZZAddress = '0xdBF3Ea6F5beE45c02255B2c26a16F300502F68da';

const erc20Abi = [
  {
    name: 'transfer',
    type: 'function',
    inputs: [
      {
        name: '_to',
        type: 'address',
      },
      {
        type: 'uint256',
        name: '_tokens',
      },
    ],
    constant: false,
    outputs: [],
    payable: false,
  },
  {
    constant: true,
    inputs: [
      {
        name: '_owner',
        type: 'address',
      },
    ],
    name: 'balanceOf',
    outputs: [
      {
        name: 'balance',
        type: 'uint256',
      },
    ],
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: '_owner',
        type: 'address',
      },
      {
        name: '_spender',
        type: 'address',
      },
    ],
    name: 'allowance',
    outputs: [
      {
        name: 'remaining',
        type: 'uint256',
      },
    ],
    type: 'function',
  },
];

const xBZZContract = new ethers.Contract(xBZZAddress, erc20Abi, wallet);

function getAddressFromSwarmKey(filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    const keyData = JSON.parse(data);
    return keyData.address;
  } catch (error) {
    console.error(`Error reading or parsing ${filePath}:`, error);
    return null;
  }
}

async function sendXBZZ(recipient) {
  const amountInWei = ethers.parseEther(amountIn10xBzz);

  const formattedRecipient = recipient.startsWith('0x') ? recipient : `0x${recipient}`;

  try {
    const balance = await xBZZContract.balanceOf(wallet.address);
    console.log(`Wallet balance: ${ethers.formatEther(balance)} xBZZ`);

    const allowance = await xBZZContract.allowance(wallet.address, xBZZAddress);
    console.log(`Allowance: ${ethers.formatEther(allowance)} xBZZ`);

    const gasLimit = BigInt('76708');
    const transaction = await xBZZContract.transfer(formattedRecipient, amountInWei, { gasLimit });
    await transaction.wait();
    console.log(`Transaction successful to ${recipient} with hash: ${transaction.hash}`);
  } catch (error) {
    console.error('Error sending transaction:', error);
  }
}

async function main() {
  const baseDir = `./`;

  console.log(`Processing bee-data-dir`);
  const filePath = path.join(baseDir, `bee-data-dir`, 'keys', 'swarm.key');

  let recipient = getAddressFromSwarmKey(filePath);

  if (recipient) {
    console.log(`Sending xBZZ to ${recipient}...`);
    await sendXBZZ(recipient);
  }
}

main();
