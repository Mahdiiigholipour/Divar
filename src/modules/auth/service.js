class AuthService {
  #model;
  constructor() {}

  // public functions
  async sendOTP(mobile) {}
  async checkOTP(mobile, code) {}
  async logout() {}

  // private functions
}

module.exports = new AuthService();
