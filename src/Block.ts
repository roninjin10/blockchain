import {BigNumber} from 'bignumber.js'

import {
  doesNotThrow,
  randomString,
} from './lib'

import {
  ZERO,
  ONE,
  NOT_FOUND,
} from './constants'

export type BlockData = {}

export interface IBlock {
  DATA: BlockData
  NONCE: BigNumber
  PREV_BLOCK: Block|null
  SOLUTION: string
}

export interface BlockParams {
  data: BlockData
  prevBlock: Block|null
  solution?: string
  verify?: boolean
}

export class Block implements IBlock {
  static verifyBlock = (b: IBlock): IBlock => {
    return b
  }

  static mineBlock = async (b: IBlock): Promise<Block> => {
    while (true) {
      const block = new Block ({
        data: b.DATA,
        prevBlock: b.PREV_BLOCK,
        solution: randomString(),
        verify: false,
      })
      if (await block.isValid()) return block
    }
  }

  private _BLOCK: IBlock

  constructor ({data, prevBlock, solution = NOT_FOUND, verify = true}: BlockParams) {
    this._BLOCK = Object.freeze({
      DATA: data,
      NONCE: prevBlock ? prevBlock.NONCE.plus(ONE) : ZERO,
      PREV_BLOCK: prevBlock,
      SOLUTION: solution,
    })
    if (verify) Block.verifyBlock(this)
  }

  get DATA() {return this._BLOCK.DATA}
  get NONCE() {return this._BLOCK.NONCE}
  get PREV_BLOCK() {return this._BLOCK.PREV_BLOCK}
  get SOLUTION() {return this._BLOCK.SOLUTION}

  public isValid = (): boolean =>
    doesNotThrow(() => Block.verifyBlock(this))

  public mine = async (): Promise<Block> =>
    this.isValid()
      ? this
      : await Block.mineBlock(this)
}
