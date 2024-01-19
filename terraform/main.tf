provider "google" {
  credentials = file("C:/Users/HI/Downloads/task-data-404610-cd09660e7286.json")
  project     = "task-data-404610"
  region      = "us-central1"
}

resource "google_storage_bucket" "example_bucket" {
  name     = "roshini1234"
  location = "US"
}

resource "google_storage_bucket_object" "example_object" {
  name   = "file.txt"  # Name of the object in the bucket
  bucket = google_storage_bucket.example_bucket.name

  source = "C:/Users/HI/Desktop/statefile/file.txt"  
  depends_on = [google_storage_bucket.example_bucket]
}

# terraform {
#   backend "gcs" {
#     bucket = "roshini1234"
#     prefix = "roshini"
#   }
# }
