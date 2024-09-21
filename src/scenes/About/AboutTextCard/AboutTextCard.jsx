import s from './AboutTextCard.module.scss';
import { ImPointRight } from 'react-icons/im';

const AboutTextCard = () => {
  return (
    <div className={s.card}>
      <p style={{ textAlign: 'justify' }}>
        Hi Everyone, I am{' '}
        <span className={s.purple}>SUVIGYA SRIVASTAVA, </span>
        <br />a software engineer currently based in{' '}
        <span className={s.purple}>Delhi, India</span>
        <br />
        <br />
        I have a Bachelor's degree in Computer Science
        <br />
        from ABES Engineering College
        <br />
        <br />
        Apart from coding, am a departmental lead at GDSC ABESEC, also some of my favourite activities are:
      </p>

      <ul>
        <li className={s.aboutActivity}>
          <ImPointRight /> Mentoring
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Reading
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight />Cinematography
        </li>
      </ul>
    </div>
  );
};

export default AboutTextCard;
