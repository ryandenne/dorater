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
    'Less than 10': 1.000,
    'Less than 20': 1.115,
    'More than 25': 'Blocked'
};

function calculatePremium() {
    const companySize = document.getElementById('company-size').value;
    const industryRisk = document.getElementById('industry-risk').value;
    const financialStability = document.getElementById('financial-stability').value;
    const claimsHistory = document.getElementById('claims-history').value;

    console.log('Company Size:', companySize);
    console.log('Industry Risk:', industryRisk);
    console.log('Financial Stability:', financialStability);
    console.log('Claims History:', claimsHistory);

    if (claimsHistory === 'More than 25') {
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

    console.log('Calculated Premium:', premium);
    document.getElementById('result').textContent = `Calculated Premium: $${premium.toFixed(2)}`;
}
