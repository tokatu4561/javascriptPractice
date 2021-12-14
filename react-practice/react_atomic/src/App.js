import logo from './logo.svg';
import './App.css';
import { PrimaryButton } from './components/atoms/button/PrimaryButton';
import { SecondaryButton } from './components/atoms/button/SecondaryButton';
import { SearchInput } from './components/molecules/SearchInput';
import { UserCard } from './components/organisms/user/UserCard';

const user = {
  name: "とかつ",
  image: "https://source.unsplash.com/brFsZ7qszSY",
  email: "1234@aaa.com",
  phone: "000-888-1111",
  company: {
    name:"テスト会社",
  }

}
function App() {
  return (
    <div className="App">
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
      <SearchInput></SearchInput>
      <UserCard user={user}></UserCard>
    </div>
  );
}

export default App;
