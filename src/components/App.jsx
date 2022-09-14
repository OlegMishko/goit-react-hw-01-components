import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';

import { FriendList } from './FriendList/FriendList';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { TransactionHistory } from './TransactionsHistory/TransactionHistory';

import { MainPage } from 'common/MainPage.styled';

export const App = () => {
  return (
    <MainPage>
      <h2>Task 1 - User profile</h2>
      <Profile user={user} />

      <h2>Task 2 - Statistics</h2>
      <Statistics data={data} />

      <h2>Task 3 - FriendList</h2>
      <FriendList friends={friends} />

      <h2>Task 4 - TransactionHistory</h2>
      <TransactionHistory transactions={transactions} />
    </MainPage>
  );
};
