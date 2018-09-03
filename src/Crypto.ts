import sha256 from 'crypto-js/sha256'
import {doesNotThrow} from './lib'

export class Crypto {
  public hasValidSignature = (signature: string, hash: string, publicKey: string): boolean => {
    return doesNotThrow(() => {
      const keypair = ec.keyFromPublic(publicKey, 'hex')
      if (!ec.verify(message, signature, keypair)) throw 'not valid sig'
    })
  }

  public calculateHash = (...args): string => 
    sha256(
      args
        .map(arg => `${arg}`)
        .join('')
    ).toString()
}