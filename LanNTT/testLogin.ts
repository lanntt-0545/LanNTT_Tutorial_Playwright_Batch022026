import {LoginPage} from "./pages/loginPage";
import {DashBoardPage} from "./pages/dashboardPage";

async function testLogin(): Promise<void>{
    const pageLogin = new LoginPage();
    const dapageDashboard = new DashBoardPage();
    await pageLogin.gotoLoginPage();
    await pageLogin.login("admin","123456");
    await dapageDashboard.verifyLoginSuccess();
    return new Promise (resolve => setTimeout(resolve,2000));
}

testLogin();