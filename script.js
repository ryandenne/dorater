const companySizeMod = {
    'Small': 1.0,
    'Medium': 1.5,
    'Large': 2.0
};

const industryRiskMod = {
    'Low': 1.000,
    'Medium': 1.500,
    'High': 1.750
};

const financialStabilityMod = {
    'Poor': 1.650,
    'Average': 1.100,
    'Good': 1.000,
    'Excellent': 0.950,
};

const claimsHistoryMod = {
    'None': 1.000,
    'Few': 1.115,
    'Many': 1.455
};

function calculatePremium() {
    const companySize = document.getElementById('company-size').value;
    const industryRisk = document.getElementById('industry-risk').value;
    const financialStability = document.getElementById('financial-stability').value;
    const claimsHistory = document.getElementById('claims-history').value;

// Assuming ClaimHistory is a number respresenting the number of claims
if (claimsHistory > 25) {
    alert("Blocked: Too many claims");
    return;
}

    const basePremium = 1000;
    const premium = basePremium * (
        companySizeMod[companySize] *
        industryRiskMod[industryRisk] *
        financialStabilityMod[financialStability] *
        claimsHistoryMod[claimsHistory]
    );

    document.getElementById('result').textContent = `Calculated Premium: $${premium.toFixed(2)}`;
}
