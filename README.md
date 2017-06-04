# voter_dapp

Voter Etherium Dapp

This is a basic NodeJs/Ethereum contract example I have been working on.

I am learning ETH contracts as I go so please bare with me if it isn't working correctly!

I have create this dapp with the use of testrpc on linux, I strongly suggest you use the same before giving it a go!

Big Nod goes to this guy

[https://medium.com/@mvmurthy/full-stack-hello-world-voting-ethereum-dapp-tutorial-part-1-40d2d0d807c2](https://medium.com/@mvmurthy/full-stack-hello-world-voting-ethereum-dapp-tutorial-part-1-40d2d0d807c2) 

I read up on the basics and went from there

Below are some notes to setting up test-rpc in linux. It took me a little while so I thought I would share it

*************************************************************

### Takes a clean Ubuntu image, up to being dev ready.
### install npm from official repo, as apt-get has a very old version of npm
`curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get update -y && sudo apt-get upgrade -y`

### install the basics
`sudo apt-get install -y build-essential python nodejs`

#### NOTE some need sudo and web3 shouldnt be installed with sudo, it screws things up

### upgrade npm before install tools
`sudo npm install -g npm`

### install web3 library for ethereum contracts
`npm install -g web3`

### install solidity for npm
`sudo npm install -g solc`

### install testrpc
`npm install -g ethereumjs-testrpc`

### You also need web3 locally in the project.

### set up your project and then install web3 locally
`npm install web3`

### TEST-RPC

run `tesrpc` in the console and you should see it start up and provide a list of accounts and private keys, use one of these accounts to test the dapp.


