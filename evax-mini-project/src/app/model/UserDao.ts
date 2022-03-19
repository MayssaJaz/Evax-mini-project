import { User } from "./User";

export class UserDao {
    private static users: User[] = [
        new User( 1,'17855594', 'Riheme', 'Ben Hassan', '10102798', '04/06/1999', '08/01/2022'),
        new User( 2,'16556941', 'Aycha', 'Abid', '12006982', '01/11/1999', '15/01/2022'),
        new User( 3,'18569623', 'Mayssa', 'Jaziri', '10002998', '01/01/2000', '04/01/2022')];
  
    public static getUserByNumInscription(numInscription: string): User | undefined {
      return UserDao.users.find((user)=>user.numInscription==numInscription);
    }
  }
  