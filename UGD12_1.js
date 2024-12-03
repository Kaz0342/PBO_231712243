//Nama: Benedict Saviola
//Kelas: B
//NPM: 231712243


class ConnectionManager {
    constructor() {
        if (ConnectionManager.instance) {
            return ConnectionManager.instance;
        }
        this.connections = [];
        ConnectionManager.instance = this;
    }

    createConnection(type, host) {
        const connection = DatabaseFactory.createDatabase(type, host);
        this.connections.push(connection);
    }

    getConnections() {
        return this.connections;
    }
}

class MySQL {
    constructor(host) {
        this.host = host;
    }
    
    connect() {
        console.log(`Connecting to MySQL database at ${this.host}`);
    }
}

class PostgreSQL {
    constructor(host) {
        this.host = host;
    }

    connect() {
        console.log(`Connecting to PostgreSQL database at ${this.host}`);
    }
}

class DatabaseFactory {
    static createDatabase(type, host) {
        switch (type) {
            case "MySQL":
                return new MySQL(host);
            case "PostgreSQL":
                return new PostgreSQL(host);
            default:
                throw new Error(`Database type "${type}" not found.`);
        }
    }
}

const manager = new ConnectionManager();
manager.createConnection("MySQL", "localhost");
manager.createConnection("PostgreSQL", "127.0.0.1");

const connections = manager.getConnections();
connections.forEach(conn => conn.connect());

console.log(connections);