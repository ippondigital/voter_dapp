exports.start = function(req,res) {
    res.render('index/index', {});
};

exports.createContract = function(req,res){
    
    console.log('**** index/createContract ****');
    
    var walletAddress = req.body.walletAddress;
    
    console.log("read the solidity file");
    code = fs.readFileSync('contracts/Voting.sol').toString();

    console.log("compile file");
    contract =  web3.eth.compile.solidity(code);
    
    console.log("set up contract");
    VotingContract = web3.eth.contract(contract.info.abiDefinition);

    console.log("deploy contract");
    
    var deployedContract = VotingContract.new(
        ['Rama','Nick','Jose'], 
        {
            from: walletAddress,
            data: contract.code,
            gas: 4700000
        }, function(err, VotingContract){
            if(!err) {
                if(typeof(VotingContract.address) === "undefined"){
                    console.log("did not get contract address");
                    return false;
                }else{
                    console.log("got contract address");
                    console.log(VotingContract.address);
                    
                    //set address to session variable as we will be using it in a mo
                    req.session.contract_address = VotingContract.address;
                    
                    redirectPage(
                        res,
                        'dashboard/'
                    );
                    
                    return true;
                    
                }
            }else{
                console.log("there was a problem");
                
                renderPage(
                        'index/index',
                        {
                            pageData: {
                                response: "contract not created",
                                pClass: "red"
                            }
                        }
                    );
            
            }
        }
    );
};

function redirectPage(res, pageLocation){
    return res.redirect(pageLocation);
}


function renderPage(res, pageLocation, pageData){
    return res.render(pageLocation,pageData);
}
