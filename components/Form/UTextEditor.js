"use client";

import { Controller } from "react-hook-form";
import { Form } from "antd";
import dynamic from "next/dynamic";

const JoditEditor = dynamic(() => import("jodit-react"), {
  ssr: false,
});

export default function UTextEditor({ name, label, placeholder }) {
  return (
    <Controller
      name={name}
      defaultValue=""
      render={({ field, fieldState: { error } }) => (
        <Form.Item
          label={label}
          validateStatus={error ? "error" : ""}
          help={error?.message}
        >
          <JoditEditor
            value={field.value || ""}

            config={{
              height: 500,
              placeholder: placeholder,
              readonly: false,
              toolbarAdaptive: false,
              spellcheck: true,
              showCharsCounter: true,
              showWordsCounter: true,
              showXPathInStatusbar: false,
              uploader: {
                insertImageAsBase64URI: true,
              },
            }}

            // 🔥 IMPORTANT FIX
            onBlur={(newContent) => {
              field.onChange(newContent);
            }}
          />
        </Form.Item>
      )}
    />
  );
}