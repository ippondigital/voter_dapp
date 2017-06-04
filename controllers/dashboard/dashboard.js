
exports.show = function(req,res) {
    
    console.log("****dashboard/show****");
    
    var contractAddress = req.session.contract_address;
    
    console.log("get the contract address");
    console.log(contractAddress);
    
    console.log("read the solidity file");
    code = fs.readFileSync('contracts/Voting.sol').toString();

    console.log("compile file");
    contract =  web3.eth.compile.solidity(code);
    
    console.log("set up contract");
    VotingContract = web3.eth.contract(contract.info.abiDefinition);
         
    
    // Additionally you can start watching right away, by passing a callback:
     var transactions = '';
// ****** not working yet so leaving empty
// 
//    var transactions = web3.eth.filter(
//        {
//            address: contractAddress,
//            from: 1,
//            to: 'latest'
//        }, function(error, result){
//      if (!error)
//        return result;
//    });
    
    contractInstance = VotingContract.at(contractAddress);

    console.log("get the total votes for Rama");
    var ramaVotes = contractInstance.totalVotesFor.call('Rama').toLocaleString();
    
    console.log("get the total votes for Nick");
    var nickVotes = contractInstance.totalVotesFor.call('Nick').toLocaleString();
    
    console.log("get the total votes for Jose");
    var joseVotes = contractInstance.totalVotesFor.call('Jose').toLocaleString();

    //console.log("add a vote for Rama");
    //contractInstance.voteForCandidate('Rama', {from: web3.eth.accounts[0]});
    
    var pageData = {
        pageData: {
                rama: ramaVotes,
                nick: nickVotes,
                jose: joseVotes,
                contract_address: req.session.contract_address,
                transactions : transactions
            }
        };

    res.render('dashboard/show.jade',pageData);
};

exports.add = function(req,res) {
    
    console.log("****dashboard/add****");
    
    var contractAddress = req.session.contract_address;
    var walletAddress = req.body.walletAddress;
    console.log("wallet address is: " + walletAddress);
    var candidate = req.body.candidateSelect;
    console.log("candidate is: " + candidate);
    
    console.log("read the solidity file");
    code = fs.readFileSync('contracts/Voting.sol').toString();

    console.log("compile file");
    contract =  web3.eth.compile.solidity(code);
    
    console.log("set up contract");
    VotingContract = web3.eth.contract(contract.info.abiDefinition);
    
    contractInstance = VotingContract.at(contractAddress);
    
    console.log("add a vote for " + candidate);
    contractInstance.voteForCandidate(candidate, {from: walletAddress});
    
    return res.redirect('/dashboard');
    
}