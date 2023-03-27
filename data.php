<?php
$dataList = [["otel" => "test Oteli", "odaNo" => 10, "fiyat" => 150.22], ["otel" => "test Oteli2", "odaNo" => 50, "fiyat" => 2500], ["otel" => "test Oteli3", "odaNo" => 40, "fiyat" => 60], ["otel" => "test Oteli4", "odaNo" => 128, "fiyat" => 25000000]];
if (isset($_GET["oda_no"])) {
    foreach ($dataList as $item) {
        if ($item["odaNo"] == $_GET["oda_no"]) {
            $dataList = [["otel" => $item["otel"], "odaNo" => $item["odaNo"], "fiyat" => $item["fiyat"]]];
        }
    }
}
echo json_encode($dataList);
