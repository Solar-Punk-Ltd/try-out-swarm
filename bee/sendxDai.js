const { ethers, JsonRpcProvider } = require('ethers');
const fs = require('fs');
const path = require('path');

const provider = new JsonRpcProvider('https://xdai.fairdatasociety.org');

// WARNING: do not push this up to anywhere
const privateKey = '';

const wallet = new ethers.Wallet(privateKey, provider);

const amountInDai = '0.05';

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

async function sendXDai(recipient) {
  const amountInWei = ethers.parseEther(amountInDai);

  const tx = {
    to: `0x${recipient}`,
    value: amountInWei,
  };

  try {
    const transaction = await wallet.sendTransaction(tx);
    await transaction.wait();
    console.log(`Transaction successful to ${recipient} with hash: ${transaction.hash}`);
  } catch (error) {
    console.error('Error sending transaction:', error);
  }
}

async function main() {
  const baseDir = `./`;
  const filePath = path.join(baseDir, 'bee-data-dir', 'keys', 'swarm.key');

  let recipient = getAddressFromSwarmKey(filePath);

  if (recipient) {
    console.log(`Sending xDai to ${recipient}...`);
    await sendXDai(recipient);
  }
}

main();
