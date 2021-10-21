let expression = '';
let openParenthesis = false;
let operation = false;
function setExpression(e) {
  if (e == 'parenthesis') {
    if (!openParenthesis) {
      expression = expression + '(';
    } else {
      expression = expression + ')';
    }
    openParenthesis = !openParenthesis;
  } else {
    expression = expression + e;
  }
  sendExpressionToIframe();
}
function clearExpression() {
  expression = '';
  sendExpressionToIframe();
}
function sendExpressionToIframe(getResult = false) {
  let resultIframe = document.getElementById('resultIframe');
  let data = {
    result: getResult,
    exp: expression,
  };
  resultIframe.contentWindow.postMessage(data, '*');
}

// Obtiene la expresión de retorno calculada por el Iframe y la establece en la variable expression
window.onmessage = function (e) {
  if (e.data.result != undefined) {
    expression = e.data.result.toString();
  }
};

function validateToGetResult() {}
