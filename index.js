'use strict';

var veriumcore = module.exports;

// module information
veriumcore.version = 'v' + require('./package.json').version;
veriumcore.versionGuard = function(version) {
  if (version !== undefined) {
    var message = 'More than one instance of veriumcore-lib found. ' +
      'Please make sure to require veriumcore-lib and check that submodules do' +
      ' not also include their own veriumcore-lib dependency.';
    throw new Error(message);
  }
};
veriumcore.versionGuard(global._veriumcore);
global._veriumcore = veriumcore.version;

// crypto
veriumcore.crypto = {};
veriumcore.crypto.BN = require('./lib/crypto/bn');
veriumcore.crypto.ECDSA = require('./lib/crypto/ecdsa');
veriumcore.crypto.Hash = require('./lib/crypto/hash');
veriumcore.crypto.Random = require('./lib/crypto/random');
veriumcore.crypto.Point = require('./lib/crypto/point');
veriumcore.crypto.Signature = require('./lib/crypto/signature');

// encoding
veriumcore.encoding = {};
veriumcore.encoding.Base58 = require('./lib/encoding/base58');
veriumcore.encoding.Base58Check = require('./lib/encoding/base58check');
veriumcore.encoding.BufferReader = require('./lib/encoding/bufferreader');
veriumcore.encoding.BufferWriter = require('./lib/encoding/bufferwriter');
veriumcore.encoding.Varint = require('./lib/encoding/varint');

// utilities
veriumcore.util = {};
veriumcore.util.buffer = require('./lib/util/buffer');
veriumcore.util.js = require('./lib/util/js');
veriumcore.util.preconditions = require('./lib/util/preconditions');

// errors thrown by the library
veriumcore.errors = require('./lib/errors');

// main bitcoin library
veriumcore.Address = require('./lib/address');
veriumcore.Block = require('./lib/block');
veriumcore.MerkleBlock = require('./lib/block/merkleblock');
veriumcore.BlockHeader = require('./lib/block/blockheader');
veriumcore.HDPrivateKey = require('./lib/hdprivatekey.js');
veriumcore.HDPublicKey = require('./lib/hdpublickey.js');
veriumcore.Networks = require('./lib/networks');
veriumcore.Opcode = require('./lib/opcode');
veriumcore.PrivateKey = require('./lib/privatekey');
veriumcore.PublicKey = require('./lib/publickey');
veriumcore.Script = require('./lib/script');
veriumcore.Transaction = require('./lib/transaction');
veriumcore.URI = require('./lib/uri');
veriumcore.Unit = require('./lib/unit');

// dependencies, subject to change
veriumcore.deps = {};
veriumcore.deps.bnjs = require('bn.js');
veriumcore.deps.bs58 = require('bs58');
veriumcore.deps.Buffer = Buffer;
veriumcore.deps.elliptic = require('elliptic');
veriumcore.deps._ = require('lodash');

// Internal usage, exposed for testing/advanced tweaking
veriumcore.Transaction.sighash = require('./lib/transaction/sighash');
