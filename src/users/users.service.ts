import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'Andi Saputra',
      email: 'andi.saputra@example.com',
      role: 'interns',
    },
    {
      id: 2,
      name: 'Budi Santoso',
      email: 'budi.santoso@example.com',
      role: 'dev',
    },
    {
      id: 3,
      name: 'Citra Dewi',
      email: 'citra.dewi@example.com',
      role: 'admin',
    },
    {
      id: 4,
      name: 'Dedi Firmansyah',
      email: 'dedi.firmansyah@example.com',
      role: 'dev',
    },
    {
      id: 5,
      name: 'Eka Pratama',
      email: 'eka.pratama@example.com',
      role: 'interns',
    },
  ];

  findAll(role?: 'intern' | 'dev' | 'admin') {
    if (role) {
      return this.users.filter((user) => user.role === role);
    }

    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((user) => user.id === id);
    return user;
  }

  create(user: {
    name: string;
    email: string;
    role: 'intern' | 'dev' | 'admin';
  }) {
    const userByHighestId = [...this.users].sort((a, b) => b.id - a.id);
    const newUser = {
      id: userByHighestId[0].id + 1,
      ...user,
    };
    this.users.push(newUser);
    return newUser;
  }

  update(
    id: number,
    updateUser: {
      name?: string;
      email?: string;
      role?: 'intern' | 'dev' | 'admin';
    },
  ) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return { ...user, ...updateUser };
      }
      return user;
    });
    return this.findOne(id);
  }

  delete(id: number) {
    const removeUser = this.findOne(id);
    this.users = this.users.filter((user) => user.id !== id);
    return removeUser;
  }
}
