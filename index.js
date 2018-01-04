// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  const collection = [];

  for (const driver of drivers) {
    if (driver.revenue > revenue) {
      collection.push(driver)
    }
  }

  return collection
}