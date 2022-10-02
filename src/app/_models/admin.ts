export class Admin {
  constructor(
    public firstName: string,
    public lastName: string,
    public email: string,
    public password: string,
    public confirmPassword: string,
    public phoneNumber?: number
  ) {}
}
