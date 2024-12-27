document.getElementById('submitBtn').addEventListener('click', function() {
  const mathGrade = parseFloat(document.getElementById('mathGrade').value);
  const englishGrade = parseFloat(document.getElementById('englishGrade').value);
  
  if (isNaN(mathGrade) || isNaN(englishGrade) || mathGrade < 0 || mathGrade > 100 || englishGrade < 0 || englishGrade > 100) {
    alert("Please enter valid grades between 0 and 100.");
    return;
  }

  const average = (mathGrade + englishGrade) / 2;

  const tableBody = document.querySelector('#gradesTable tbody');
  const newRow = tableBody.insertRow();

  const mathCell = newRow.insertCell(0);
  const englishCell = newRow.insertCell(1);
  const averageCell = newRow.insertCell(2);

  mathCell.textContent = mathGrade;
  englishCell.textContent = englishGrade;
  averageCell.textContent = average.toFixed(2);

  updateAverages();
});

function updateAverages() {
  const rows = document.querySelectorAll('#gradesTable tbody tr');
  
  let totalMath = 0;
  let totalEnglish = 0;
  let totalOverall = 0;
  let rowCount = rows.length;

  rows.forEach(row => {
    totalMath += parseFloat(row.cells[0].textContent);
    totalEnglish += parseFloat(row.cells[1].textContent);
    totalOverall += parseFloat(row.cells[2].textContent);
  });

  const mathAverage = (totalMath / rowCount).toFixed(2);
  const englishAverage = (totalEnglish / rowCount).toFixed(2);
  const overallAverage = (totalOverall / rowCount).toFixed(2);

  document.getElementById('mathAverage').textContent = mathAverage;
  document.getElementById('englishAverage').textContent = englishAverage;
  document.getElementById('overallAverage').textContent = overallAverage;
}
