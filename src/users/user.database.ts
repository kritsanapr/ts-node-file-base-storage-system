import { User, UnitUser, Users } from './user.interface';
import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs';

let users: Users = loadUsers();

function loadUsers() {
    try {
        const users = fs.readFileSync('./users.json', 'utf8');
        return JSON.parse(users);
    } catch (err) {
        console.log(`Error ${err}`);
        return {};
    }
}