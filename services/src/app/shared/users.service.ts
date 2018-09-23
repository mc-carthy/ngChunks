export class UserService {
    activeUsers = ['User1', 'User2'];
    inactiveUsers = ['User3', 'User4'];

    activeateUser(id: number) {
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);
    }

    deactiveateUser(id: number) {
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
    }
}