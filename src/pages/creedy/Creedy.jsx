import React, {useState} from 'react';
import './Creedy.css';
import logo_img from '../../components/assets/img/CREEDY.png';
import man_img from '../../components/assets/img/1676690582_grizly-club-p-klipart-muzhchina-s-noutbukom-1 1.png';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import photo_docs_img from '../../components/assets/img/Rectangle 13.png';
import vertical_line from '../../components/assets/img/Line 5.png';
import underSquare from '../../components/assets/img/Rectangle 13.png';
import overSquare from '../../components/assets/img/Rectangle 26.png';
import firstReviewPhoto from '../../components/assets/img/first_review.png';
import secondReviewPhoto from '../../components/assets/img/second_review.png';
import thirdReviewPhoto from '../../components/assets/img/third_review.png';
import fourthReviewPhoto from '../../components/assets/img/fourth_review.png';
import fifthReviewPhoto from '../../components/assets/img/fifth-review.png';
import sixthReviewPhoto from '../../components/assets/img/sixth_review.png';
import Form from "../../components/form/Form";
import Accordion from "../../components/accordion/accordion";

const Creedy = () => {

  const data =[
    {
      id: 1,
      label: 'Реально ли взять кредит под залог, если недвижимость уже заложена?',
      renderContent: () => <p>Lorem ipsum dolore jxgchlivbjskjfvhsukvhlsbfv1</p>,
    },
    {
      id: 2,
      label: 'Какие документы нужны для получения кредита?',
      renderContent: () => <p>Lorem ipsum dolore jxgchlivbjskjfvhsukvhlsbfv2</p>,
    },
    {
      id: 3,
      label: 'Какая форма договора используется при залоговом кредитовании?',
      renderContent: () => <p>Lorem ipsum dolore jxgchlivbjskjfvhsukvhlsbfv3</p>,
    },
    {
      id: 4,
      label: 'Какая форма договора используется при залоговом кредитовании?',
      renderContent: () => <p>Lorem ipsum dolore jxgchlivbjskjfvhsukvhlsbfv4</p>,
    },
  ]
  function valuetext(value) {
    return `${value}`;
  }
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="online_loans_wrapper">
      <div className="container">
        <div className="online_loans" id="online_loans">
          <header className="header">
            <div className="logo_wrap">
              <img src={logo_img} alt="logo_img" className="logo_img"/>
            </div>
            <div className="nav">
              <ul className="menu">
                <li className="menu_item" onClick={toggleForm}>
                  Получить деньги
                </li>
                <li className="menu_item">
                  <a href="#asked_questions_block" className="menu_item">Клиентам</a>
                </li>
                <li className="menu_item">
                  <a href="#reviews_block" className="menu_item">Отзывы</a>
                </li>
              </ul>
            </div>
            <div className="signin-signup_wrap">
              <button className="signin" onClick={toggleForm} >
                {showForm &&
                  <div className={`form-container ${showForm ? "show" : ""}`}>
                     <Form />
                  </div>
                }
                Войти
              </button>
              <button className="signup" onClick={toggleForm}>
                Зарегистрироваться
              </button>
            </div>
          </header>
          <div className="online_loans_block">
            <div className="online_loans_title">
              <h2 className="online-loans-title">Онлайн займы</h2>
              <p className="secured_by_real_estate">под залог недвижимости</p>
              <div className="get_money">
                <div className="application_details">
                  <div className="amount">
                    <p>Сумма</p>
                    <p>120 000</p>
                  </div>
                  <Box sx={{width: 275, marginTop: '18px'}}>
                    <Slider
                      size="small"
                      defaultValue={40}
                      aria-label="Small"
                      valueLabelDisplay="auto"
                      min={10000}
                      max={500000}
                      getAriaValueText={valuetext}
                    />
                  </Box>
                  <p className="term">Срок</p>
                  <div className="specific_term">
                    <button>12</button>
                    <button>24</button>
                    <button>36</button>
                  </div>
                </div>
                <div className="get_money_button">
                  <button onClick={toggleForm}>
                    Получить деньги
                  </button>
                </div>
              </div>
            </div>
            <div className="online_loans_desc">
              <h3 className="new_clients">Новым клиентам</h3>
              <h2 className="till_amount">до 500 000</h2>
              <p className="desc">Получите деньги на карту уже через 30 минут</p>
            </div>
            <div className="online_loans_img">
              <img src={man_img} alt="man"/>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="get_money_form">
          <h2>Как получить деньги?</h2>
          <div className="form">
            <div className="signup_form">
              <h3>Зарегистрируйтесь на сайте</h3>
              <input type="number" placeholder="+7 (000) 000 00-00"/>
              <input type="text" placeholder="Код с телефона"/>
            </div>
            <div className="take_photo_docs">
              <h3>Сфотографируйте ваши документы</h3>
              <img src={photo_docs_img} alt="photo_docs" className="photo_docs"/>
              <i className="photo"></i>
              <span className="photo_text">Сделайте фото документа </span>
            </div>
            <div className="online_contract">
              <h3>Подпишите онлайн договор и получите деньги</h3>
              <label htmlFor="bankCard" className="input-label">
                <span>Банковская карта </span>
                <input type="radio" className="bankCard-input" id="bankCard" name="payment"/>
              </label>
              <label htmlFor="fastPayment" className="input-label">
                <span>Система быстрых платежей </span>
                <input type="radio" className="bankCard-input" id="fastPayment" name="payment"/>
              </label>
            </div>
          </div>
        </div>
        <div className="get_money_desc">
          <img src={vertical_line} alt="vertical_line" className="line"/>
          <p>Мы ценим ваше время и дорожим вашими потребностями, поэтому предлагаем быстрые и выгодные условия для всех
            клиентов. Наша команда профессионалов готова помочь вам решить ваши финансовые вопросы и предложить
            оптимальные варианты займа. Обращайтесь к нам, и мы поможем вам решить ваши финансовые трудности надежно и
            быстро.</p>
        </div>
      </div>
      <div className="why_us_wrapper">
        <div className="container">
          <div className="why_us_block">
            <h3>Почему именно мы?</h3>
            <div className="general_block">
              <div className="no_change_owner">
                <img src={overSquare} alt="unser square" className="overSquare"/>
                <img src={underSquare} alt="unser square" className="underSquare"/>
                <h4>Без смены собственника</h4>
                <p>Жилье остается у владельца — не требуется переоформлять недвижимость на банк и аннулировать
                  регистрацию</p>
                <i className="note"></i>
              </div>
              <div className="fast_get_loan">
                <img src={overSquare} alt="unser square" className="overSquare"/>
                <img src={underSquare} alt="unser square" className="underSquare"/>
                <h4>30 минут на выдачу займа</h4>
                <p>Быстро примем решение по вашей заявке</p>
                <i className="watch"></i>
              </div>
              <div className="no_visit_to_office">
                <img src={overSquare} alt="unser square" className="overSquare"/>
                <img src={underSquare} alt="unser square" className="underSquare"/>
                <h4 className='no_visit_office'>Без визита в офис</h4>
                <p>Оформляем займ и зачисляем деньги онлайн</p>
                <i className="globe"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="reviews_block_wrapper">
        <div className="container">
          <div className="reviews_block" id="reviews_block">
            <h2>Что о нас говорят клиенты</h2>
            <div className="first_three_reviews">
              <div className="first_review">
                <img src={firstReviewPhoto} alt="review_photo"/>
                <p className="review">Обращалась за займом под залог дома. Сотрудники компании очень внимательные и
                  компетентные. Все объяснили подробно и помогли оформить документы. Спасибо за вашу помощь!</p>
                <i className="overElipse"></i>
                <i className="innerElipse"></i>
                <i className="polygon"></i>
              </div>
              <div className="second_review">
                <img src={secondReviewPhoto} alt="review_photo"/>
                <p className="review">Мне срочно нужны были деньги на лечение. В этой компании мне одобрили заем под
                  залог
                  квартиры всего за один день. Очень выручили в трудной ситуации.</p>
                <i className="overElipse"></i>
                <i className="innerElipse"></i>
                <i className="polygon"></i>
              </div>
              <div className="third_review">
                <img src={thirdReviewPhoto} alt="review_photo" className="review_photo"/>
                <p className="review">Мне срочно понадобились деньги на ремонт машины. Обратился в эту компанию, и мне
                  быстро одобрили заем под залог квартиры. Процентная ставка приемлемая, а условия договора прозрачные.
                  Рекомендую!</p>
                <i className="overElipse"></i>
                <i className="innerElipse"></i>
                <i className="polygon"></i>
              </div>
            </div>
            <div className="second_three_reviews">
              <div className="fourth_review">
                <img src={fourthReviewPhoto} alt="review_photo"/>
                <p className="review">Брала здесь заем на покупку новой квартиры. Условия оказались выгоднее, чем в
                  других
                  компаниях. Оформление прошло быстро и без лишней бюрократии.</p>
                <i className="overElipse"></i>
                <i className="innerElipse"></i>
                <i className="polygon"></i>
              </div>
              <div className="fifth_review">
                <img src={fifthReviewPhoto} alt="review_photo"/>
                <p className="review">Брал здесь заем на развитие бизнеса. Оценили недвижимость оперативно, деньги
                  получил
                  на следующий день. Удобный график платежей и вежливое обслуживание.</p>
                <i className="overElipse"></i>
                <i className="innerElipse"></i>
                <i className="polygon"></i>
              </div>
              <div className="sixth_review">
                <img src={sixthReviewPhoto} alt="review_photo"/>
                <p className="review">Обращалась в эту компанию дважды. Оба раза получила займы быстро и без проблем.
                  Рекомендую всем, кому срочно нужны деньги.</p>
                <i className="overElipse"></i>
                <i className="innerElipse"></i>
                <i className="polygon"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="asked_questions_wrapper">
        <div className="container">
          <div className="asked_questions_block" id="asked_questions_block">
            <h2>Часто задаваемые вопросы</h2>
            <Accordion items={data} keepOthersOpen={false} />
            {/*<div className="question_block">*/}
            {/*  <div>*/}
            {/*    <p>Реально ли взять кредит под залог, если недвижимость уже заложена?</p>*/}
            {/*    <i className="arrow"></i>*/}
            {/*  </div>*/}
            {/*  <div>*/}
            {/*    <p>Какие документы нужны для получения кредита?</p>*/}
            {/*    <i className="arrow"></i>*/}
            {/*  </div>*/}
            {/*</div>*/}
            {/*<div className="question_block">*/}
            {/*  <div>*/}
            {/*    <p>Какая форма договора используется при залоговом кредитовании?</p>*/}
            {/*    <i className="arrow"></i>*/}
            {/*  </div>*/}
            {/*  <div>*/}
            {/*    <p>Какая форма договора используется при залоговом кредитовании?</p>*/}
            {/*    <i className="arrow"></i>*/}
            {/*  </div>*/}
            {/*</div>*/}
          </div>
          <div className="apply_for_loan_block">
            <div className="get_now_loan">
              <h2 className="get_now">Получить займ прямо сейчас!
                <span className="realize_plans">реализуйте свои планы </span></h2>
            </div>
            <div className="apply_for_loan">
              <button className="apply_loan_btn" onClick={toggleForm}>
                <a href="#online_loans">Оформить заявку</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Creedy;