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
//Outputs A Blank Transaction If It Doesn't Exist
```
