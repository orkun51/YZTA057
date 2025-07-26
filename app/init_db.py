from app.db import engine
from app import models

if __name__ == "__main__":
    print("Creating tables...")
    models.Base.metadata.create_all(bind=engine)
    print("Done.") 