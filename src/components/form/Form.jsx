import React, {useState} from 'react';
import './Form.css';
import TextField from '@mui/material/TextField';
import {inputLabelClasses} from "@mui/material/InputLabel";

const Form = ({showForm}) => {
  return (
    <div className={`form_wrap ${showForm ? 'visible' : ''}`}>
      <div className="form_container">
        <h2 className="form_title">Заполните форму</h2>
        <div className="application_form">
          <div className="form_fields">
            <div>
              <TextField
                label="Имя"
                style={{color: "white"}}
                defaultValue="Иван"
                color="secondary"
                id="field"
                InputLabelProps={{
                  sx: {
                    // set the color of the label when not shrinked
                    color: "red",
                    [`&.${inputLabelClasses.shrink}`]: {
                      // set the color of the label when shrinked (usually when the TextField is focused)
                      color: "white",
                      fontSize: "18px",
                    }
                  }
                }}
                focused
              />
            </div>
            <div>
              <TextField
                label="Фамилия"
                defaultValue="Иванов"
                color="secondary"
                id="field"
                InputLabelProps={{
                  sx: {
                    // set the color of the label when not shrinked
                    color: "red",
                    [`&.${inputLabelClasses.shrink}`]: {
                      // set the color of the label when shrinked (usually when the TextField is focused)
                      color: "white",
                      fontSize: "18px",
                    }
                  }
                }}
                focused
              />
            </div>
          </div>
          <div className="form_fields">
            <div>
              <TextField
                label="Отчество"
                style={{color: "white"}}
                defaultValue="Иванович"
                color="secondary"
                id="field"
                InputLabelProps={{
                  sx: {
                    // set the color of the label when not shrinked
                    color: "red",
                    [`&.${inputLabelClasses.shrink}`]: {
                      color: "white",
                      fontSize: "18px",
                    }
                  }
                }}
                focused
              />
            </div>
            <div>
              <TextField
                label="Дата рождения"
                defaultValue="01.01.1991"
                color="secondary"
                id="field"
                InputLabelProps={{
                  sx: {
                    // set the color of the label when not shrinked
                    color: "red",
                    [`&.${inputLabelClasses.shrink}`]: {
                      // set the color of the label when shrinked (usually when the TextField is focused)
                      color: "white",
                      fontSize: "18px",
                    }
                  }
                }}
                focused
              />
            </div>

          </div>
          <div className="form_fields">
            <div>
              <TextField
                label="Серия паспорта"
                style={{color: "white"}}
                defaultValue="00 00"
                color="secondary"
                id="field"
                InputLabelProps={{
                  sx: {
                    // set the color of the label when not shrinked
                    color: "red",
                    [`&.${inputLabelClasses.shrink}`]: {
                      color: "white",
                      fontSize: "18px",
                    }
                  }
                }}
                focused
              />
            </div>
            <div>
              <TextField
                label="Номер паспорта"
                defaultValue="00000"
                color="secondary"
                id="field"
                InputLabelProps={{
                  sx: {
                    // set the color of the label when not shrinked
                    color: "red",
                    [`&.${inputLabelClasses.shrink}`]: {
                      // set the color of the label when shrinked (usually when the TextField is focused)
                      color: "white",
                      fontSize: "18px",
                    }
                  }
                }}
                focused
              />
            </div>
          </div>
          <div className="form_fields">
            <div>
              <TextField
                label="ИНН"
                style={{color: "white"}}
                defaultValue="0000000000"
                color="secondary"
                id="field"
                InputLabelProps={{
                  sx: {
                    // set the color of the label when not shrinked
                    color: "red",
                    [`&.${inputLabelClasses.shrink}`]: {
                      color: "white",
                      fontSize: "18px",
                    }
                  }
                }}
                focused
              />
            </div>
            <div>
              <TextField
                label="Снилс"
                defaultValue="000-000-000-00"
                color="secondary"
                id="field"
                InputLabelProps={{
                  sx: {
                    // set the color of the label when not shrinked
                    color: "red",
                    [`&.${inputLabelClasses.shrink}`]: {
                      // set the color of the label when shrinked (usually when the TextField is focused)
                      color: "white",
                      fontSize: "18px",
                    }
                  }
                }}
                focused
              />
            </div>
          </div>
          <div className="form_fields">
            <div>
              <TextField
                label="Адрес недвижимости"
                style={{color: "white"}}
                defaultValue="ул. Кузнецова 3"
                color="secondary"
                id="field"
                InputLabelProps={{
                  sx: {
                    // set the color of the label when not shrinked
                    color: "red",
                    [`&.${inputLabelClasses.shrink}`]: {
                      color: "white",
                      fontSize: "18px",
                    }
                  }
                }}
                focused
              />
            </div>
            <div>
              <TextField
                label="Тип"
                defaultValue="Апартаменты"
                color="secondary"
                id="field"
                InputLabelProps={{
                  sx: {
                    // set the color of the label when not shrinked
                    color: "red",
                    [`&.${inputLabelClasses.shrink}`]: {
                      // set the color of the label when shrinked (usually when the TextField is focused)
                      color: "white",
                      fontSize: "18px",
                    }
                  }
                }}
                focused
              />
            </div>
          </div>
          <div className="form_fields" style={{display: 'flex', justifyContent: "center", flexDirection: "column"}}>
            <div>
              <TextField
                label="Номер телефона"
                style={{color: "white"}}
                defaultValue="+7 (777) 585 55-88"
                color="secondary"
                id="field"
                InputLabelProps={{
                  sx: {
                    // set the color of the label when not shrinked
                    color: "red",
                    [`&.${inputLabelClasses.shrink}`]: {
                      color: "white",
                      fontSize: "18px",
                    }
                  }
                }}
                focused
              />
            </div>
          </div>
          <div className="btn_wrap">
            <button className="form_btn">Получить деньги</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Form;

