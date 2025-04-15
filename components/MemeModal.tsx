"use client";

import { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@heroui/modal";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { Meme } from "@/data/memes";

type Props = {
  meme: Meme;
  onSave: (meme: Meme) => void;
  onClose: () => void;
};

export const MemeModal = ({ meme, onSave, onClose }: Props) => {
  const [name, setName] = useState(meme.name);
  const [imageUrl, setImageUrl] = useState(meme.imageUrl);
  const [likes, setLikes] = useState(meme.likes);
  const [errors, setErrors] = useState<{ name?: string; imageUrl?: string; likes?: string }>({});

  const validate = () => {
    const newErrors: { name?: string; imageUrl?: string; likes?: string } = {};
    if (name.length < 3 || name.length > 100) {
      newErrors.name = "Name must be between 3 and 100 characters";
    }
    // Валідація URL (дозволяємо як локальні, так і зовнішні)
    if (!imageUrl.match(/^(\/[^\s]+|https?:\/\/[^\s]+)$/)) {
      newErrors.imageUrl = "Invalid URL format";
    }
    if (likes < 0 || likes > 99) {
      newErrors.likes = "Likes must be between 0 and 99";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (validate()) {
      onSave({ ...meme, name, imageUrl, likes });
      onClose();
    }
  };

  return (
    <Modal isOpen onOpenChange={onClose}>
      <ModalContent>
        <ModalHeader>Edit Meme</ModalHeader>
        <ModalBody>
          <Input
            label="ID"
            value={meme.id.toString()}
            isDisabled
            fullWidth
          />
          <Input
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            isInvalid={!!errors.name}
            errorMessage={errors.name}
            fullWidth
          />
          <Input
            label="Image URL"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            isInvalid={!!errors.imageUrl}
            errorMessage={errors.imageUrl}
            fullWidth
          />
          <Input
            label="Likes"
            type="number"
            value={likes.toString()}
            onChange={(e) => setLikes(Number(e.target.value))}
            isInvalid={!!errors.likes}
            errorMessage={errors.likes}
            fullWidth
          />
        </ModalBody>
        <ModalFooter>
          <Button color="danger" variant="light" onPress={onClose}>
            Cancel
          </Button>
          <Button color="primary" onPress={handleSave}>
            Save
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};