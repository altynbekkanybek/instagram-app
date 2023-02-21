

import React from 'react';
import { Components } from '../../../components';
import UserList from './UserList';
import { Providers } from '../../../provider';

import cls from "../../../assets/styles/users/Users.module.scss";

export default function Users() {
  const { users } = Providers.useAuth()

  return (
    <Components.Container>
      <section className={cls.users_wrapper}>
        <div className={cls.users_wrapper_content}>
          <h3>Рекомендации</h3>
          
          <div className={cls.users_wrapper_content_usersInline}>
            {!users && <Components.Loader fullHeight={"50vh"} />}
             
            {users?.map(item => <UserList base={item}/>)}
          </div>
        </div>
      </section>
    </Components.Container>
  )
};
