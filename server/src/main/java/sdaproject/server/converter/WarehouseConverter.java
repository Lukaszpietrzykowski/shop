package sdaproject.server.converter;

import org.springframework.stereotype.Component;
import sdaproject.server.dto.WarehouseDTO;
import sdaproject.server.entity.WarehouseEntity;

@Component
public class WarehouseConverter implements Converter<WarehouseEntity, WarehouseDTO> {

    private final ProductConverter productConverter;

    public WarehouseConverter(ProductConverter productConverter) {
        this.productConverter = productConverter;
    }

    @Override
    public WarehouseEntity convertToEntity(WarehouseDTO dto) {
        WarehouseEntity entity = new WarehouseEntity();
        entity.setId(dto.getId());
        entity.setQuantity(dto.getQuantity());
        entity.setProductEntity(productConverter.convertToEntity(dto.getProductDTO()));
        return entity;
    }

    @Override
    public WarehouseDTO convertToDto(WarehouseEntity entity) {
        WarehouseDTO dto = new WarehouseDTO();
        dto.setId(entity.getId());
        dto.setQuantity(entity.getQuantity());
        dto.setProductDTO(productConverter.convertToDto(entity.getProductEntity()));
        return dto;
    }
}
