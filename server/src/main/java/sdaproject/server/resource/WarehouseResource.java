package sdaproject.server.resource;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import sdaproject.server.dto.DictionaryDTO;
import sdaproject.server.dto.WarehouseDTO;
import sdaproject.server.entity.WarehouseEntity;
import sdaproject.server.service.AbstractService;
import sdaproject.server.service.WarehouseService;

import java.util.List;

@RestController
@RequestMapping("api/warehouse")
public class WarehouseResource extends AbstractResource<WarehouseEntity, WarehouseDTO> {

    private final WarehouseService warehouseService;

    public WarehouseResource(WarehouseService warehouseService) {
        this.warehouseService = warehouseService;
    }


    @Override
    public AbstractService<WarehouseEntity, WarehouseDTO> getService() {
        return warehouseService;
    }


}

