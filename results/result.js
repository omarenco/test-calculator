window.onmessage = function (e) {
  const data = e.data;
  if (!data.result) {
    document.getElementById('resulTxt').value = data.exp;
  } else {
    try {
      const result = eval(data.exp);
      document.getElementById('resulTxt').value = result;
      window.top.postMessage({ result: result }, '*');
    } catch (error) {
      alert('La expresión no es válida... intenta nuevamente');
    }
  }
};
