# Run all Static Platform services concurrently
$root = Resolve-Path (Join-Path $PSScriptRoot "..")

Write-Host "`n==========================================================" -ForegroundColor Cyan
Write-Host " STARTING STATIC PLATFORM (CARS, MOBILES, BIKES)" -ForegroundColor Cyan
Write-Host "==========================================================" -ForegroundColor Cyan

Write-Host "`n-> Starting CarCompare (Root Portal) on port 3000..." -ForegroundColor Green
$carJob = Start-Job -ScriptBlock {
  param($dir)
  Set-Location $dir
  npm run dev -- -p 3000
} -ArgumentList (Join-Path $root "carcompare")

Write-Host "-> Starting PhoneCompare (Smartphones) on port 3001..." -ForegroundColor Green
$phoneJob = Start-Job -ScriptBlock {
  param($dir)
  Set-Location $dir
  npm run dev -- -p 3001
} -ArgumentList (Join-Path $root "phonecompare")

Write-Host "-> Starting BikeCompare (Two-Wheelers) on port 3002..." -ForegroundColor Green
$bikeJob = Start-Job -ScriptBlock {
  param($dir)
  Set-Location $dir
  npm run dev -- -p 3002
} -ArgumentList (Join-Path $root "bikecompare")

Write-Host "`nAll 3 micro-frontend platforms initiated:" -ForegroundColor Yellow
Write-Host "  * Main Portal & Cars: http://localhost:3000" -ForegroundColor White
Write-Host "  * PhoneCompare:       http://localhost:3001" -ForegroundColor White
Write-Host "  * BikeCompare:        http://localhost:3002" -ForegroundColor White
Write-Host "`nPress Ctrl+C in this console to stop all background services.`n" -ForegroundColor Gray

try {
  while ($true) {
    Receive-Job -Job $carJob, $phoneJob, $bikeJob
    Start-Sleep -Seconds 1
  }
} finally {
  Write-Host "`nStopping all platform jobs..." -ForegroundColor Yellow
  Stop-Job -Job $carJob, $phoneJob, $bikeJob -ErrorAction SilentlyContinue
  Remove-Job -Job $carJob, $phoneJob, $bikeJob -Force -ErrorAction SilentlyContinue
  Write-Host "All services stopped." -ForegroundColor Green
}
