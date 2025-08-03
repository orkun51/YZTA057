
import torch
from model import get_model
import os

# Modeli tanımla (predict.py ile aynı yapılandırmada olmalı)
model = get_model(num_classes=2, pretrained=False)

# Kayıt yolunu belirle
save_path = os.path.join(os.path.dirname(__file__), "final_model.pth")

# Modelin state_dict'ini (ağırlıklarını) kaydet
torch.save(model.state_dict(), save_path)

print(f"Sahte model ağırlıkları '{save_path}' olarak başarıyla oluşturuldu.")
