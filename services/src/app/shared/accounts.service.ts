export class AccountsService {
    accounts = [
        {
            name: 'Master Account',
            status: 'Active'
        },
        {
            name: 'Test Account',
            status: 'Inactive'
        },
        {
            name: 'Hidden Account',
            status: 'Unknown'
        },
    ];

    addAccount(name: string, status: string) {
        this.accounts.push({name: name, status: status});
    }

    updateStatus(id: number, status: string) {
        this.accounts[id].status = status;
    }
}