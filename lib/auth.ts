import { verify } from 'jsonwebtoken';

export function verifyToken(token: string): boolean {
  try {
    verify(token, 'secret');
    return true;
  } catch {
    return false;
  }
}
