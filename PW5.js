document.addEventListener('DOMContentLoaded', function () {
    // Кнопка для завдання 1
    document.getElementById('button__first').addEventListener('click', function () {
        // Зчитування значень з полів вводу
        const PL110KV_Omega_Val = parseFloat(document.getElementById('PL110KVOmegaVal').value);
        const T110KV_Omega_Val = parseFloat(document.getElementById('T110KVOmegaVal').value);
        const V110KV_Omega_Val = parseFloat(document.getElementById('V110KVOmegaVal').value);
        const V10KV_Omega_Val = parseFloat(document.getElementById('V10KVOmegaVal').value);
        const tires_Omega_Val = parseFloat(document.getElementById('tiresOmegaVal').value);

        const PL110KV_Tvi_Val = parseFloat(document.getElementById('PL110KVTviVal').value);
        const T110KV_Tvi_Val = parseFloat(document.getElementById('T110KVTviVal').value);
        const V110KV_Tvi_Val = parseFloat(document.getElementById('V110KVTviVal').value);
        const V10KV_Tvi_Val = parseFloat(document.getElementById('V10KVTviVal').value);
        const tires_Tvi_Val = parseFloat(document.getElementById('tiresTviVal').value);

        const Planned_K_Max_Val = parseFloat(document.getElementById('PlannedKMaxVal').value);

        // Розрахунки
        const OmegaSumVal = PL110KV_Omega_Val * 10 + T110KV_Omega_Val + V110KV_Omega_Val + V10KV_Omega_Val + 6 * tires_Omega_Val;

        const tvosVal = (
            PL110KV_Tvi_Val * PL110KV_Omega_Val +
            T110KV_Tvi_Val * T110KV_Omega_Val +
            V110KV_Tvi_Val * V110KV_Omega_Val +
            V10KV_Tvi_Val * V10KV_Omega_Val +
            tires_Tvi_Val * 6 * tires_Omega_Val
        ) / OmegaSumVal;

        const kaosVal = (OmegaSumVal * tvosVal) / 8760;
        const kposVal = 1.2 * (Planned_K_Max_Val / 8760);
        const DKOmega = 2 * OmegaSumVal * (kaosVal + kposVal);
        const DSOmega = DKOmega + V10KV_Omega_Val;

        // Вивід результатів
        document.getElementById('OmegaSumVal').textContent = OmegaSumVal.toFixed(2);
        document.getElementById('tvosVal').textContent = tvosVal.toFixed(2);
        document.getElementById('kaosVal').textContent = (kaosVal * 1e4).toFixed(2);
        document.getElementById('kposVal').textContent = (kposVal * 1e4).toFixed(2);
        document.getElementById('DKOmega').textContent = (DKOmega * 1e4).toFixed(2);
        document.getElementById('DSOmega').textContent = DSOmega.toFixed(2);
    });

    // Кнопка для завдання 2
    document.getElementById('button__second').addEventListener('click', function () {
        const ZperA = parseFloat(document.getElementById('ZperAVal').value);
        const ZperP = parseFloat(document.getElementById('ZperPVal').value);
        const Omega = parseFloat(document.getElementById('OmegaVal').value);
        const tv = parseFloat(document.getElementById('tvVal').value);
        const kp = parseFloat(document.getElementById('kpVal').value);
        const Pm = parseFloat(document.getElementById('PmVal').value);
        const Tm = parseFloat(document.getElementById('TmVal').value);

        const WnedaVal = Omega * tv * Pm * Tm;
        const WnedpVal = kp * Pm * Tm;
        const ZperVal = ZperA * WnedaVal + ZperP * WnedpVal;

        document.getElementById('WnedaVal').textContent = WnedaVal.toFixed(2);
        document.getElementById('WnedpVal').textContent = WnedpVal.toFixed(2);
        document.getElementById('ZperVal').textContent = ZperVal.toFixed(2);
    });
});
