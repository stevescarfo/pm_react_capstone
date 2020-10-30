import http from "../http-common";

class PolicyDataService {
  getAll() {
    return http.get("/policies");
  }
};

export default new PolicyDataService();