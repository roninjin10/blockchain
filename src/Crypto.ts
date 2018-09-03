import sha256 from 'crypto-js/sha256'

const isValidSignature = (signature: string, data: string, publicKey: string) => true

export class Crypto {
  public hasValidSignature = (signature: string, data: string, publicKey: string): boolean =>
      isValidSignature(signature, data, publicKey)

  public calculateHash = (...args): string =>
    sha256(
      args
        .map(arg => `${arg}`)
        .join('')
    ).toString()
}
