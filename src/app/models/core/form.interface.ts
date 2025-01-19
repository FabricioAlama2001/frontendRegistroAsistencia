import { Signer } from './signer.interface';

export interface Form {
  id: string;
  title: string;
  logo?: string;
  signers?: Signer[];
}
