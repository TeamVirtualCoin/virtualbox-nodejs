const fetch = require("node-fetch")
let daemon = "daemonhost tobewritten"
let d = "http://" + daemon

class VirtualBox {

	init(dae) {
		d = "http://" + dae;
	}
	
	async GetTxById(id) {
		id = String(id)
		let res = await fetch(d + "/gettx/" + String(id))
		let tx = await res.json()
		return tx
	}

	async CreateWallet() {
		let res = await fetch(d + "/createwallet")
		let wallet = await res.json()
		return wallet
	}

	async SendTx(privateKey,amount,receiver) {
		obj = {
			"privateKey" : privateKey,
			"amount" : amount,
			"receiver" : receiver
		}
		try {
			let res = await fetch(d + "/sendtx",{
				method : "POST",
				body : JSON.stringify(obj)
			})
			let tx = await res.json()
			return tx
		} catch(err) {
			return err
		}
	}

	async ReceivedTx(publicKey) {
		try {
			let res = await fetch(d + "/receivedtx/" + publicKey)
			let txs = await res.json()
			return txs
		} catch(err) {
			return err
		}
	}

	async SentTx(publicKey) {
		try {
			let res = await fetch(d + "/senttx/" + publicKey)
			let txs = await res.json()
			return txs
		} catch(err) {
			return err
		}
	}

	async Balance(publicKey) {
		try {
			let res = await fetch(d + "/balance/" + publicKey)
			let bal = await res.json()
			return bal
		} catch(err) {
			return err
		}
	}

	async IsContract(txid) {
		try {
    		let res = await fetch(d + "/iscontract/" + String(txid))
       		let is = await res.json()
            return is
 		} catch(err) {
 			return err
 		}
 	}

	async EstimateContractFuel(code) {
		try {
    		let res = await fetch(d + "/contractfuel/" + code)
        	let fuel = await res.json()
            return fuel
        } catch(err) {
        	return errl
        }
	}

	async SendContract(privateKey,code) {
    	obj = {
        	"privateKey" : privateKey,
            "code" : code
        }
        try {
    		let res = await fetch(d + "/sendcontract",{
        		method : "POST",
       	        body : JSON.stringify(obj)
        	})
        	let tx = await res.json()
            return tx
		} catch(err) {
			return err
		}
	}

	async CallContract(txid,privateKey,call,maxAllowance) {
    	obj = {
       		"txid" : txid,
            "privateKey" : privateKey,
            "call" : call,
            "maxAllowance" : maxAllowance
        }
        try {
    	    let res = await fetch(d + "/callcontract",{
        		method : "POST",
         		body : JSON.stringify(obj)
      		})
        	let call = await res.json()
        	return call
        } catch(err) {
        	return err
        }
	}
}

module.exports = {
	VirtualBox : VirtualBox
}
