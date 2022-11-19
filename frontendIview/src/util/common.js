import i18n from "@/config/lang.js"

const CheckCurrency = currency => {
  if (currency==="NTD" || currency==="JPY" || currency==="TWD" || currency==="INR") {
    return true
  } else {
    return false
  }
}

const DownloadFile = (blob, fileName) => {
  const link = document.createElement("a")
  link.href = window.URL.createObjectURL(blob)
  link.setAttribute("download", fileName)
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link);
}


const CheckIfDuplicateExists = array => {
  return new Set(array).size !== array.length
}

const Translate = paramName => {
  let locale = i18n.locale
  let message = i18n.messages[locale]
  return message[paramName]
}

const CheckNotEmpty = source => {
  return source !== null && typeof source !== 'undefined' && source !== ""
}

const CheckNotChinese = source => {
  let regExp = /^[\d|a-zA-Z|_]+$/
  return regExp.test(source)
}

const CheckEmail = source => {
  let regExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return regExp.test(source)
}

const Message = (instance, type = "success", message) => {
  instance.$Message[type]({
    background: false,
    content: message,
  })
}


const DateToString = date => {
  let mm = date.getMonth() + 1
  let dd = date.getDate()
  return [date.getFullYear(), (mm > 9 ? "" : "0") + mm, (dd > 9 ? "" : "0") + dd].join("-")
}

const DateToNumber = date => {
  let dd = String(date.getDate()).padStart(2, "0")
  let mm = String(date.getMonth() + 1).padStart(2, "0")
  let yyyy = date.getFullYear()
  return parseInt(yyyy + mm + dd)
}

const DateValidationCheck = date => {
  if (!/^[0-9]{8}$/.test(date)) {
    return false
  }
  let year, month, day
  year = date.substring(0, 4)
  month = date.substring(4, 6)
  day = date.substring(6, 8)
  let iaMonthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  if (year < 1700 || year > 2500) {
    return false
  }
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    iaMonthDays[1] = 29
  }
  if (month < 1 || month > 12) {
    return false
  }
  if (day < 1 || day > iaMonthDays[month - 1]) {
    return false
  }
  return true
}

const CheckNumber = testNumber => {
  let temp
  if (typeof testNumber==="number") {
    temp = testNumber.toString()
  } else {
    temp = testNumber
  }
  let re = /^\+?[1-9][0-9]*$/
  let regExp = /^[\d|a-zA-Z|_]+$/
  if (re.test(temp) && regExp.test(temp)) {
    return true
  } else {
    return false
  }
}

const CheckNumberWithNegative = testNumber => {
  let temp
  if (typeof testNumber==="number") {
    temp = testNumber.toString()
  } else {
    temp = testNumber
  }
  let re = /^(\-|\+)?[1-9][0-9]*$/
  let regExp = /^[\d|a-zA-Z|_]+$/
  if (re.test(temp) && regExp.test(temp)) {
    return true
  } else {
    return false
  }
}

const CheckFloat = testNumber => {
  let temp
  if (typeof testNumber==="number") {
    temp = testNumber.toString()
  } else {
    temp = testNumber
  }
  let re = /^\+?[0-9]*.[0-9]*$/
  let regExp = /^[\d|a-zA-Z|.|_]+$/
  if (re.test(temp) && regExp.test(temp)) {
    return true
  } else {
    return false
  }
}

const ExceptionHandling = errorMsg => {
  let text = ""
  if (errorMsg) {
    if (errorMsg.status===401) {
      text = Translate("COMMON_MESSAGE_NOT_AUTH")
    } else if (errorMsg.data) {
      if (Array.isArray(errorMsg.data.messages)) {
        errorMsg.data.messages.forEach(message => {
          text = text.concat(message, "\n")
        })
      } else {
        text = errorMsg.data
      }
    } else {
      text = Translate("COMMON_MESSAGE_SYSTEM_ERROR")
    }
  }
  return text
}

export {
  DownloadFile,
  CheckIfDuplicateExists,
  Translate,
  CheckNotChinese,
  CheckEmail,
  CheckNotEmpty,
  DateToString,
  CheckCurrency,
  CheckNumber,
  CheckNumberWithNegative,
  CheckFloat,
  DateValidationCheck,
  DateToNumber,
  Message,
  ExceptionHandling
}
