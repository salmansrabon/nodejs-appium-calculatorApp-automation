const selectors = {
    btn8: 'android=new UiSelector().resourceId("com.google.android.calculator:id/digit_8")',
    btn7: 'android=new UiSelector().resourceId("com.google.android.calculator:id/digit_7")',
    btnPlus: 'android=new UiSelector().resourceId("com.google.android.calculator:id/op_add")',
    btnMinus: 'android=new UiSelector().resourceId("com.google.android.calculator:id/op_sub")',
    btnMultiply: 'android=new UiSelector().resourceId("com.google.android.calculator:id/op_mul")',
    btnDivision: 'android=new UiSelector().resourceId("com.google.android.calculator:id/op_div")',
    resultPreview: 'android=new UiSelector().resourceId("com.google.android.calculator:id/result_preview")',
    btnClear:'android=new UiSelector().resourceId("com.google.android.calculator:id/clr")'
}
module.exports = { selectors }