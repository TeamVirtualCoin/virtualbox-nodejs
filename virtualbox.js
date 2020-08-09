const fetch = require("node-fetch")
let daemon = "daemonhost tobewritten"
let d = "http://" + daemon

class VirtualBox {

	static init(dae) {
		d = "http://" + dae;
	}
	
	static GetTxById(id) {
		id = String(id)
		fetch(d + "/gettx/" + String(id))
			.then(res => res.json())
			.then(tx => return tx)
	}

	static CreateWallet() {
		fetch(d + "/createwallet")
			.then(res =  res.json())
			.then(wallet => return wallet)
			.catch(err => return false)
	}

	static SendTx(privateKey,amount,receiver) {
		obj = {
			"privateKey" : privateKey,
			"amount" : amount,
			"receiver" : receiver
		}
		fetch(d + "/sendtx",{
			method : "POST",
			body : JSON.stringify(obj)
		})
			.then(res => res.json())
			.then(tx => return tx)
			.catch(err => return false)
	}

	static ReceivedTx(publicKey) {
		fetch(d + "/receivedtx/" + publicKey)
			.then(res => res.json())
			.then(txs => return txs)
			.catch(err => return false)
	}

	static SentTx(publicKey) {
		fetch(d + "/sentx/" + publicKey)
			.then(res => res.json())
			.then(txs => return txs)
			.catch(err => return false)
	}

	static Balance(publicKey) {
		fetch(d + "/balance/" + publicKey)
			.then(res => res.json())
			.then(bal => return bal)
			.catch(err => return false)
	}

	static IsContract(txid) {
    	fetch(d + "/iscontract/" + String(txid)
       		.then(res => res.json())
            .then(iscontract => return iscontract)
            .catch(err => return false)
 	}

	static EstimateContractFuel(code) {
    	fetch(d + "/contractfuel/" + code)
        	.then(res => res.json())
            .then(fuel => return fuel)
            .catch(err => return false)
	}

	static SendContract(privateKey,code) {
    	obj = {
        	"privateKey" : privateKey,
            "code" : code
        }
    	fetch(d + "/sendcontract",{
        	method : "POST",
            body : JSON.stringify(obj)
        })
        	.then(res => res.json())
            .then(tx => return tx)
            .catch(err => return false)
	}

	static CallContract(txid,privateKey,call,maxAllowance) {
    	obj = {
       		"txid" : txid,
            "privateKey" : privateKey,
            "call" : call,
            "maxAllowance" : maxAllowance
        }
        fetch(d + "/callcontract",{
        	method : "POST",
            body : JSON.stringify(obj)
        })
        	.then(res => res.json())
            .then(tx => return tx)
            .catch(err => return false)
	}
}

module.exports = {
	VirtualBox : VirtualBox
}
