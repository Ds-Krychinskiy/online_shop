import Typography from "../../atoms/typography";
import { ProfileWrapper } from "./style";
const Profile = () => {
  return (
    <ProfileWrapper>
      <Typography>Мой профиль:</Typography>
      <Typography>Личные данные</Typography>
      <Typography>Фамилия: Кручинския </Typography>
      <Typography>Имя: Денис </Typography>
      <Typography>Отчиство: Сергеевич</Typography>
      <Typography>Эл.почта: ds.krychinskiy@gmail.com</Typography>
      <Typography>Телефон: 89138741522 </Typography>
    </ProfileWrapper>
  );
};

export default Profile;
