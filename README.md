# virtualbox-nodejs
SDK For Interacting With VirtualCoin In NodeJS

**Installation**

```bash
npm install virtualbox-js
```

**Initialization**

```javascript
const vc = require("virtualbox-js")
let virtualbox = new vc.VirtualBox()
//Initializing With Current Address
virtualbox.init("virtualcoin.glitch.me")
```

**Checking Balance**

```javascript
virtualbox.Balance("address")
  .then(balance => console.log(balance))
  .catch(err => console.log(err))
//Outputs In Number
```

**Getting A Transaction By Id**

```javascript
virtualbox.GetTxById(393)
  .then(tx => console.log(tx))
  .catch(err => console.log(err))
//Outputs A Valid Transaction If Exists As An Object
//Outputs A Blank Transaction If It Doesn't Exist As An Object
```

**Getting A List Of Received Txs**

```javascript
virtualbox.ReceivedTx("address")
  .then(txs => console.log(txs))
  .catch(err => console.log(err))
//Outputs null If No Transactions Were Made Before
//Outputs An Array With A List Of Transactions
```

**Getting A List Of Sent Txs**

```javascript
virtualbox.SentTx("address")
  .then(txs => console.log(txs))
  .catch(err => console.log(err))
//Outputs null If No Transactions Were Made Before
//Outputs An Array With A List Of Transactions
```

**Creating A Wallet**

```javascript
virtualbox.CreateWallet()
  .then(wallet => console.log(wallet))
  .catch(err => console.log(err))
//Outputs An Objec
