export class Token {
  id: string;
  validUntil: number;
  refreshToken: Token;
  valid: boolean;
}
