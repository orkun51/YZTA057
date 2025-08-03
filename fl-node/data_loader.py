
    import os
from glob import glob
import torch
from monai.data import Dataset, DataLoader
from monai.transforms import (
    LoadImaged,
    EnsureChannelFirstd,
    ScaleIntensityRanged,
    Resized,
    Compose
)
from sklearn.model_selection import train_test_split

def get_dataloader(data_dir="./data", batch_size=32):
    """Veri setini klasör yapısından okur ve bir DataLoader oluşturur."""
    # 0 (negatif) ve 1 (pozitif) klasörlerindeki tüm PNG dosyalarını bul
    neg_images = sorted(glob(os.path.join(data_dir, "*", "0", "*.png")))
    pos_images = sorted(glob(os.path.join(data_dir, "*", "1", "*.png")))

    # Görüntü yolları ve etiketleri birleştir
    images = neg_images + pos_images
    labels = [0] * len(neg_images) + [1] * len(pos_images)

    if not images:
        raise ValueError(f"Veri dizininde hiç görüntü bulunamadı: {data_dir}")

    data_dicts = [
        {"image": image_path, "label": label}
        for image_path, label in zip(images, labels)
    ]

    transforms = Compose([
        LoadImaged(keys=["image"]),
        EnsureChannelFirstd(keys=["image"]),
        ScaleIntensityRanged(keys=["image"], a_min=0, a_max=255, b_min=0.0, b_max=1.0, clip=True),
        Resized(keys=["image"], spatial_size=(224, 224)) # EfficientNet için uygun boyut
    ])

    dataset = Dataset(data=data_dicts, transform=transforms)
    loader = DataLoader(dataset, batch_size=batch_size, shuffle=True)
    return loader

def split_data(dataloader, test_size=0.2):
    """Veri yükleyiciyi eğitim ve doğrulama yükleyicilerine böler."""
    dataset = dataloader.dataset
    indices = list(range(len(dataset)))

    # Veri setini etiketlere göre katmanlı (stratified) olarak böl
    # Bu, eğitim ve test setlerinde etiket dağılımının aynı olmasını sağlar
    labels = [item['label'] for item in dataset.data]
    train_indices, val_indices = train_test_split(
        indices, test_size=test_size, random_state=42, stratify=labels
    )

    # Alt kümeler oluştur
    train_subset = torch.utils.data.Subset(dataset, train_indices)
    val_subset = torch.utils.data.Subset(dataset, val_indices)

    # Yeni DataLoader'lar oluştur
    train_loader = DataLoader(train_subset, batch_size=dataloader.batch_size, shuffle=True)
    val_loader = DataLoader(val_subset, batch_size=dataloader.batch_size, shuffle=False)

    return train_loader, val_loader
    
