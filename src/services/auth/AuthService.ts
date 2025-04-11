export class AuthService {
  static login = (id: string, password: string): boolean => {
    if (id == "admin" && password == "admin") {
      return true;
    } else {
      return false;
    }
  }
}
