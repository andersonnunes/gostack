import React, { useState } from 'react';
import { FiPower, FiClock } from 'react-icons/fi';

import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  Schedule,
  NextAppointmenet,
  Section,
  Appointment,
  Calendar,
} from './styles';

import { useAuth } from '../../hooks/auth';

import logoImg from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const { signOut, user } = useAuth();

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="GoBarber" />

          <Profile>
            <img src={user.avatar_url} alt={user.name} />
            <div>
              <span>Bem-vindo,</span>
              <strong>{user.name}</strong>
            </div>
          </Profile>

          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>

      <Content>
        <Schedule>
          <h1>Horários agendados</h1>
          <p>
            <span>Hoje</span>
            <span>Dia 06</span>
            <span>Segunda-feira</span>
          </p>

          <NextAppointmenet>
            <strong>Atendimento a seguir</strong>
            <div>
              <img
                src="https://avatars0.githubusercontent.com/u/2254731?s=460&u=c34dfbafb54d6bb7c3f715ebe93a811cc7355771&v=4"
                alt="Diego Fernandes"
              />

              <strong>Diego Fernandes</strong>
              <span>
                <FiClock />
                08:00
              </span>
            </div>
          </NextAppointmenet>

          <Section>
            <strong>Manhã</strong>

            <Appointment>
              <span>
                <FiClock />
              </span>
              08:00
              <div>
                <img
                  src="https://avatars0.githubusercontent.com/u/2254731?s=460&u=c34dfbafb54d6bb7c3f715ebe93a811cc7355771&v=4"
                  alt="Diego Fernandes"
                />

                <strong>Diego Fernandes</strong>
              </div>
            </Appointment>

            <Appointment>
              <span>
                <FiClock />
              </span>
              08:00
              <div>
                <img
                  src="https://avatars0.githubusercontent.com/u/2254731?s=460&u=c34dfbafb54d6bb7c3f715ebe93a811cc7355771&v=4"
                  alt="Diego Fernandes"
                />

                <strong>Diego Fernandes</strong>
              </div>
            </Appointment>
          </Section>

          <Section>
            <strong>Tarde</strong>

            <Appointment>
              <span>
                <FiClock />
              </span>
              08:00
              <div>
                <img
                  src="https://avatars0.githubusercontent.com/u/2254731?s=460&u=c34dfbafb54d6bb7c3f715ebe93a811cc7355771&v=4"
                  alt="Diego Fernandes"
                />

                <strong>Diego Fernandes</strong>
              </div>
            </Appointment>
          </Section>
        </Schedule>
        <Calendar />
      </Content>
    </Container>
  );
};

export default Dashboard;
